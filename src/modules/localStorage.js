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
            imageUrl: state.app.imageUrl,
            previewMode: state.app.previewMode,
            previewText: state.app.previewText,
            previewBoldText: state.app.previewBoldText,
            previewBackground: state.app.previewBackground,
            selectedPreview: state.app.selectedPreview,
            uploadUrl: state.app.uploadUrl,
            generalUrl: state.app.generalUrl
        })
        localStorage.setItem("userInfo", serializedState)
    } catch (err) {
        return undefined
    }
}