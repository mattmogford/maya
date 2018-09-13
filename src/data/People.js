class _People {
    people = [
        { id: 0, name: 'Matt' },
        { id: 1, name: 'James' },
    ]

    getPersonByID(id) {
        return this.people.filter(p => p.id === id)[0]
    }
}
export const People = new _People()