import knex from 'knex'
import * as Constants from './utils/constants'

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
