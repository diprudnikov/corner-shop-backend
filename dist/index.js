"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const database_1 = require("./database");
const App_1 = require("./App");
debug('tsnode-apiserver');
database_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    const port = process.env.PORT || 3000;
    App_1.default.routes(connection);
    const app = App_1.default.express;
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`App listening at ${port}`);
    });
    server.on('error', (error) => {
        switch (error.code) {
            case 'EACCES':
                console.error(`${port} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    });
})).catch(error => console.log('Mysql connection error: ', error));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix5Q0FBOEM7QUFDOUMsK0JBQXdCO0FBRXhCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTFCLDJCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQU8sVUFBVSxFQUFFLEVBQUU7SUFDM0MsTUFBTSxJQUFJLEdBQW9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUN2RCxhQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLGFBQUcsQ0FBQyxPQUFPLENBQUM7SUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEIsTUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQTRCLEVBQUUsRUFBRTtRQUNsRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxRQUFRO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLCtCQUErQixDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDUixLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTTtZQUNSO2dCQUNFLE1BQU0sS0FBSyxDQUFDO1NBQ2Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcclxuaW1wb3J0ICogYXMgZGVidWcgZnJvbSAnZGVidWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSAnLi9kYXRhYmFzZSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuZGVidWcoJ3Rzbm9kZS1hcGlzZXJ2ZXInKTtcclxuXHJcbmNyZWF0ZUNvbm5lY3Rpb24oKS50aGVuKGFzeW5jIChjb25uZWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgcG9ydDogbnVtYmVyIHwgc3RyaW5nID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG4gIEFwcC5yb3V0ZXMoY29ubmVjdGlvbik7XHJcbiAgY29uc3QgYXBwID0gQXBwLmV4cHJlc3M7XHJcbiAgYXBwLnNldCgncG9ydCcsIHBvcnQpO1xyXG5cclxuICBjb25zdCBzZXJ2ZXI6IGh0dHAuU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcclxuXHJcbiAgc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgQXBwIGxpc3RlbmluZyBhdCAke3BvcnR9YCk7XHJcbiAgfSk7XHJcbiAgc2VydmVyLm9uKCdlcnJvcicsIChlcnJvcjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcclxuICAgICAgY2FzZSAnRUFDQ0VTJzpcclxuICAgICAgICBjb25zb2xlLmVycm9yKGAke3BvcnR9IHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXNgKTtcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0VBRERSSU5VU0UnOlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7cG9ydH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnTXlzcWwgY29ubmVjdGlvbiBlcnJvcjogJywgZXJyb3IpKTtcclxuIl19
