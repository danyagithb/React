export const MainFunctions = {
    showValue: async <T, > (value: T) => {
        for (const key in value) {
            return <p>${key} - ${value}</p>
        }

    }
}
