export const loadInfo = () => {
    try {
        const serializedState = localStorage.getItem("userInfo")
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveInfo = (state) => {
    try {
        const serializedState = JSON.stringify({
            imageUrl: state.app.imageUrl
        })
        localStorage.setItem("userInfo", serializedState)
    } catch (err) {
        return undefined
    }
}