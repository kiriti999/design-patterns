class Singleton {
    constructor() {
        throw new Error('Use the getInstance() method on the Singleton object!');
    }

    getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new DatabaseConnection();
        }

        return Singleton.instance;
    }
}

class DatabaseConnection {
    constructor() {
        this.databaseConnection = 'localhost';
    }

    getNewDBConnection() {
        return this.databaseConnection;
    }
}

export const dbInstance = Singleton.getInstance();