import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageInfoStore = defineStore('pageInfo', () => {
    //画面名
    const pageName = ref('')
    function setPageName(name: string): void {
        pageName.value = name
    }

    //画面ID
    const pageId = ref('')
    function setPageId(id: string): void {
        pageId.value = id
    }

    //会社名表示・非表示
    const showCompanyName = ref(true)
    function setShowCompanyName(show: boolean): void {
        showCompanyName.value = show
    }

    //部署名表示・非表示
    const showDepartmentName = ref(true)
    function setShowDepartmentName(show: boolean): void {
        showDepartmentName.value = show
    }

    //ログイン日時表示・非表示
    const showLoginDate = ref(true)
    function setShowLoginDate(show: boolean): void {
        showLoginDate.value = show
    }

    //ユーザ名表示・非表示
    const showUserName = ref(true)
    function setShowUserName(show: boolean) {
        showUserName.value = show
    }

    //運用日表示・非表示
    const showUseDate = ref(true)
    function setShowUseDate(show: boolean): void {
        showUseDate.value = show
    }

    return {
        pageName,
        setPageName,
        pageId,
        setPageId,
        showCompanyName,
        setShowCompanyName,
        showDepartmentName,
        setShowDepartmentName,
        showLoginDate,
        setShowLoginDate,
        showUserName,
        setShowUserName,
        showUseDate,
        setShowUseDate,
    }
})
