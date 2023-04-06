import DocumentStore from 'ravendb';
import { Timespan } from 'src/timespan/entities/timespan.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<DocumentStore> => {
      try {
        const store = new DocumentStore('http://127.0.0.1:8080', 'MCM');
        store.conventions.registerEntityType(Timespan);
        store.initialize();
        return store;
      } catch (error) {
        throw error;
      }
    },
  },
];
