class Currency {

    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_8a2vxufoWHRWD6o3qnQ437uXtS5toRiD1lJWmLtM&base_currency=";
    }
    async exchange(amount, first, second) {
        const res = await fetch(`${this.url}${first}`);
        const data = await res.json();
        const result =amount*data.data[second];
        return result;
    }
}