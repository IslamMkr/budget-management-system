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
    return await database(Constants.DB_TABLE_AGENTS)
                    .insert(agent)
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
                addAgentPartnerDebt(agent, partnerData[0], 0)
            })
        })

    })
}

const addAgentPartnerDebt = async (agent, partner, ammount) => {
    const record = {
        pid: partner.pid,
        aid: agent.aid,
        montant_global: ammount,
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

export const getAgentPayments = async () => {
    return await database.select('payments.aid', 'payments.pid' , 'compte', 'cle', 'agents.nom as agent_nom', 'prenom', 'partenaires.nom as partenaire_nom', 'mois', 'montant')
                    .from(Constants.DB_TABLE_PAYMENTS)
                    .join(Constants.DB_TABLE_PARTNERS, 'payments.pid', 'partenaires.pid')
                    .join(Constants.DB_TABLE_AGENTS, 'payments.aid', 'agents.aid')
                    .andWhere('payments.mois', 1)
                    .andWhere('payments.annee', 2021)
                    .orderBy('payments.pid')
}
