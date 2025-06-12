import { Server, Model } from 'miragejs';
import { mapUserToFrontend, User } from '../models/User';
import { LoginAudit } from '../models/LoginAudit';
import { LOGIN_AUDITS, USERS } from './seedData';
import { ModelDefinition, Registry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const UserModel: ModelDefinition<User> = Model.extend({});
const UsersModel: ModelDefinition<User[]> = Model.extend({});
const LoginAuditModel: ModelDefinition<LoginAudit> = Model.extend({});

export interface ActionResult {
  success: boolean;
  message?: string;
  data?: any;
}

type AppRegistry = Registry<
  {
    user: typeof UserModel;
    loginAudit: typeof LoginAuditModel;
    users: typeof UsersModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,
    logging: true,
    models: {
      user: Model,
      loginAudit: Model,
    },

    seeds(server) {
      server.db.loadData({
        users: USERS,
        loginAudits: LOGIN_AUDITS,
      });
    },

    routes() {
      this.urlPrefix = 'http://localhost:3000';
      this.namespace = 'api';
      this.timing = 750;

      this.post('login', (schema: AppSchema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        const user = schema.db.users.findBy({ email, password });

        const successActionResult = {
          success: true,
          message: 'Login successful',
          data: mapUserToFrontend(user),
        };
        return successActionResult;
      });

      //   this.get('/todos', (schema) => {
      //     return schema.todos.all();
      //   });
      //
      //   this.patch('/todos/:id', (schema, request) => {
      //     let attrs = JSON.parse(request.requestBody).todo;
      //
      //     return schema.todos.find(request.params.id).update(attrs);
      //   });
      //
      //   this.post(
      //     '/todos',
      //     (schema, request) => {
      //       let attrs = JSON.parse(request.requestBody).todo;
      //
      //       return schema.todos.create(attrs);
      //     },
      //     { timing: 2000 },
      //   );
      //
      //   this.delete('/todos/:id', (schema, request) => {
      //     return schema.todos.find(request.params.id).destroy();
      //   });
      // },
    },
  });

  return server;
}
