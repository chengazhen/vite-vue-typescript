import { defineStore } from "pinia";
import { getUserinfo } from "@/api/response";
export const userStore = defineStore("user", {
    state: () => {
        return {
            uesrname: ''
        }
    },
    actions: {
        setName(data: string): void {
            this.uesrname = data
        },
        async userinfo() {
            try {
                const { data } = await getUserinfo()
                if (data.status === 1) {
                    console.log(data);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})