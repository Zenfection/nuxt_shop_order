import { Category } from "@/utils/types"


export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as Category[],
    }),

    actions: {
        saveState(categories: Category[]): void {
            const item = {
                value: categories,
                expire: new Date().getTime() + 1 * 24 * 60 * 60 * 1000, // 1 days
            }
            localStorage.setItem('categories', JSON.stringify(item))
        },

        restoreState(): boolean {
            const item = localStorage.getItem('categories')

            if (item) {
                const parsedItem = JSON.parse(item)

                if (parsedItem.expire < new Date().getTime()) {
                    localStorage.removeItem('categories')
                    this.categories = []
                    return false
                }

                this.categories = parsedItem.value
                return true
            } else {
                this.categories = []
                return false
            }
        },

        async fetchCategories(): Promise<Category[]> {
            if (!this.restoreState()) {
                try {
                    const response = await CategoryService.getAll() as Category[]
                    this.saveState(response)
                    this.categories = response
                } catch (error) {
                    console.error(error)
                }
            }
            return this.categories
        }
    },
});