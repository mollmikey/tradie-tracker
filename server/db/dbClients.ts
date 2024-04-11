import { Client, Clients } from '../../models/clients'
import connection from './connection'

const db = connection

// Client sign up account
export async function addClient(clientSignUp: Client): Promise<Client> {
  return await db('clients').insert(clientSignUp)
}

// Client account profile page
export async function getClientById(id: number) {
  return await db('clients').where({ id }).select().first()
}

// Client account edit profile page
export async function updateClient(
  id: number,
  updateData: Clients,
): Promise<Client> {
  return await db('clients').where({ id }).update(updateData)
}

// Client delete account
export async function delClient(id: number) {
  return await db('clients').where({ id }).del()
}
