class PCVNService {
    private readonly apiProvince: string

    constructor(apiProvince: string) {
        this.apiProvince = apiProvince
    }

    async getProvinces() {
        const { data } = await useFetch(this.apiProvince, {
            method: 'get',
        }) as any
        return data.map((item: any) => ({ name: item.name, code: item.code }))
    }

    async getDistricts(provinceCode: string) {
        const { data } = await useFetch(`${this.apiProvince}p/${provinceCode}`, {
            method: 'get',
            params: { depth: 2 },
        }) as any

        return data.districts.map((item: any) => ({
            name: item.name,
            code: item.code,
        }))
    }

    async getWards(districtCode: string) {
        const { data } = await useFetch(`${this.apiProvince}d/${districtCode}`, {
            method: 'get',
            params: { depth: 2 },
        }) as any

        return data.wards.map((item: any) => ({ name: item.name, code: item.code }))
    }
}

export default PCVNService