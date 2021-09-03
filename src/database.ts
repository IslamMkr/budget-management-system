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

export const getAllAgents = (event) => {
    database.select()
        .from('agents')
        .then(data => {
            event.reply(Constants.DB_GET_ALL_AGENTS, data)
        }).catch((err) => {
            console.error(err)
        })
}

export const addAgent = (event, agent) => {
    database(Constants.DB_TABLE_AGENTS)
        .insert(agent)
        .then(_ =>{
            event.reply(Constants.DB_ADD_AGENT, Constants.DB_OP_SUCCESS)
        })
        .catch((err) => {
            event.reply(Constants.DB_ADD_AGENT, Constants.DB_OP_FAILURE)
            console.error(err)
        })
}

export const addPartner = (event, partner) => {
    database(Constants.DB_TABLE_PARTNERS)
        .insert(partner)
        .then(_ => {
            event.reply(Constants.DB_ADD_PARTNER, Constants.DB_OP_SUCCESS)
        }).catch((err) => {
            event.reply(Constants.DB_ADD_PARTNER, Constants.DB_OP_FAILURE)
            console.error(err)
        })
}