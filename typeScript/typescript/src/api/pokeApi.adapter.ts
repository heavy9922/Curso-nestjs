import axios from 'axios'

export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}

export class PokeapiFetchAdapter implements HttpAdapter {
  async get<T>(url: string) {
    const resp = await fetch(url)
    const data: T = await resp.json()
    return data
  }
}

export class PokeapiAdapter implements HttpAdapter {
  private readonly axios = axios

  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url)
    return data
  }

  // async post(url: string, data: any) {
  //   return
  // }

  // async patch(url: string, data: any) {
  //   return
  // }

  // async delete(url: string) {
  //   return
  // }
}
