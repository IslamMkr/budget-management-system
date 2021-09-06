import knex from 'knex'
import * as Constants from './utils/constants'
import * as DateUtils from './utils/date'

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: 'database.sqlite3'
    },
    useNullAsDefault: true
}

const database = knex(knexConfig)


/**
 * Database operations
 */

// export const getAllAgents = async (event) => {
//     await database.select()
//         .from('agents')
//         .then(data => {
//             event.reply(Constants.DB_RESPONSE_GET_ALL_AGENTS, data)
//         }).catch((err) => {
//             console.error(err)
//         })
// }

// export const addAgent = async (event, agent) => {
//     await database(Constants.DB_TABLE_AGENTS)
//         .insert(agent)
//         .then(_ =>{
//             event.reply(Constants.DB_RESPONSE_ADD_AGENT, Constants.DB_OP_SUCCESS)
//         })
//         .catch((err) => {
//             event.reply(Constants.DB_RESPONSE_ADD_AGENT, Constants.DB_OP_FAILURE)
//             console.error(err)
//         })
// }

// export const addPartner = async (event, partner) => {
//     await database(Constants.DB_TABLE_PARTNERS)
//         .insert(partner)
//         .then(_ => {
//             event.reply(Constants.DB_RESPONSE_ADD_PARTNER, Constants.DB_OP_SUCCESS)
//         }).catch((err) => {
//             event.reply(Constants.DB_RESPONSE_ADD_PARTNER, Constants.DB_OP_FAILURE)
//             console.error(err)
//         })
// }

export const getAllAgents = async () => {
    return await database.select()
                    .from(Constants.DB_TABLE_AGENTS)
}

export const getAllPartners = async () => {
    return await database.select()
                    .from(Constants.DB_TABLE_PARTNERS)
}

export const addAgent = async (agent) => {
    await database(Constants.DB_TABLE_AGENTS)
                    .insert(agent)
                    .then(_ => initializeAgentDebts(agent))
}

const initializeAgentDebts = async (agent) => {
    getAgentWithAccountNumber(agent).then(agentData => {
        getAllPartners().then(partners => {
            partners.forEach(partner => {
                initializeAgentPartnerDebt(agentData[0], partner)
                initializeAgentPartnerPayments(agentData[0], partner)
            })
        })
    })
}

const getAgentWithAccountNumber = async (agent) => {
    return await database.select()
                    .from(Constants.DB_TABLE_AGENTS)
                    .where('compte', agent.compte)
}

export const addPartner = async (partner) => {
    return await database(Constants.DB_TABLE_PARTNERS)
                    .insert(partner)
                    .then(_ => initializeDebts(partner))
}

const initializeDebts = async (partner) => {
    getPartnerWithName(partner).then(partnerData => {
        
        getAllAgents().then(agents => {
            agents.forEach(agent => {
                initializeAgentPartnerDebt(agent, partnerData[0])
                initializeAgentPartnerPayments(agent, partnerData[0])
            })
        })

    })
}

const initializeAgentPartnerPayments = async (agent, partner) => {
    console.log("adding payments")
    const records = [
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 1, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 2, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 3, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 4, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 5, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 6, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 7, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 8, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 9, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 10, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 11, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() },
        { pid: partner.pid, aid: agent.aid, montant: 0, mois: 12, annee: DateUtils.currentYear, timestamp: DateUtils.getCurrentTime() }
    ]

    await database.insert(records).into(Constants.DB_TABLE_PAYMENTS).catch(err => console.log(err))
}

const initializeAgentPartnerDebt = async (agent, partner) => {
    const record = {
        pid: partner.pid,
        aid: agent.aid,
        montant_global: 0,
        annee: DateUtils.currentYear,
        timestamp: DateUtils.getCurrentTime()
    }

    await database(Constants.DB_TABLE_AGENTS_DETTES)
            .insert(record)
}

export const deletePartner = async (partner) => {
    return await database(Constants.DB_TABLE_PARTNERS)
                    .where('pid', partner.pid)
                    .del()
                    .then(_ => {
                        deletePartnerRecords(partner)
                    })
}

const deletePartnerRecords = async (partner) => {
    deletePartnerPaymentRecords(partner)
    deleteAgentPartnerDebts(partner)
}

const deletePartnerPaymentRecords = async (partner) => {
    await database(Constants.DB_TABLE_PAYMENTS)
            .where('pid', partner.pid)
            .del()
}

const deleteAgentPartnerDebts = async (partner) => {
    await database(Constants.DB_TABLE_AGENTS_DETTES)
            .where('pid', partner.pid)
            .del()
}

export const updatePartner = async (partner, partnerName) => {
    return await database(Constants.DB_TABLE_PARTNERS)
                    .where('pid', partner.pid,)
                    .update('nom', partnerName)
}

export const getPartnerWithName = async (partner) => {
    return await database(Constants.DB_TABLE_PARTNERS)
                    .where("nom", partner.nom)
                    .select()
}

export const getAgentsPayments = async (month, year) => {
    return await database.select('payments.aid', 'payments.pid' , 'compte', 'cle', 'agents.nom as agent_nom', 'prenom', 'partenaires.nom as partenaire_nom', 'mois', 'montant')
                    .from(Constants.DB_TABLE_PAYMENTS)
                    .join(Constants.DB_TABLE_PARTNERS, 'payments.pid', 'partenaires.pid')
                    .join(Constants.DB_TABLE_AGENTS, 'payments.aid', 'agents.aid')
                    .andWhere('payments.mois', month)
                    .andWhere('payments.annee', year)
                    .orderBy('payments.pid')
}
