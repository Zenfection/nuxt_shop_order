class BaseService {
    constructor(protected baseUrl: string) {}

    private getHeaders() {
        const user = window.localStorage.getItem('user') ?? null
        const token = user ? JSON.parse(user)?.value?.token : null
        return {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }

    private getBaseUrl() {
        const config = useRuntimeConfig()
        if(process.env.NODE_ENV === 'production') {
            return config.apiURL
        } else {
            return 'http://localhost:3000'
        }
    }


    protected async get<T>(url: string): Promise<T> {
        const { data } = await useFetch<T>(`${this.baseUrl}${url}`, {
            method: 'GET',
            baseURL: this.getBaseUrl(),
            headers: this.getHeaders(),
        })
        return data as T
    }

    protected async post<T>(url: string, data: any): Promise<T> {
        const { data: responseData } = await useFetch(`${this.baseUrl}${url}`, {
            method: 'post',
            baseURL: this.getBaseUrl(),
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        })
        return responseData as T
    }

    protected async patch<T>(url: string, data: any): Promise<T> {
        const { data: responseData } = await useFetch(`${this.baseUrl}${url}`, {
            method: 'PATCH',
            baseURL: this.getBaseUrl(),
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        })
        return responseData as T
    }
}

export default BaseService