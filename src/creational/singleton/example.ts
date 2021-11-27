// SINGLETON EXAMPLE

(() => {
  class Database {
    private static instance: Database;

    // make the constructor private so it cannot be used from outside the component
    private constructor() {
      // some initialization code here, like to connection to the db
    }

    public static getInstance() {
      if (!Database.instance) {
        // implements thread lock here if the app has multithreading to avoid being initialized by another thread

        // check again after the thread locking
        if (!Database.instance) {
          Database.instance = new Database();
        }
      }

      return Database.instance;
    }

    public query(query: string) {
      // a singleton should define some business logic which can be executed on its instance
    }
  }

  class Application {
    main() {
      const db: Database = Database.getInstance();

      // use the db connection
      db.query("SELECT * FROM users");
    }
  }
})();

// ref: https://refactoring.guru/design-patterns/singleton
