const useRandomid = () => {
        return String(Math.random(Math.random() * 10000000)).slice(2, 8)
}

export default useRandomid