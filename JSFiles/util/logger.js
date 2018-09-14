"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, prettyPrint } = winston_1.format;
exports.logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.simple(),
    transports: [
        //Output to generated log file & Write to all logs with level `info` and above to `logs.log    
        new winston_1.transports.File({
            filename: './Log/logs.log',
            //filename: 'combined.log',
            maxsize: 5242880,
            maxFiles: 5,
            handleExceptions: true,
        }),
        // - Write all logs error (and above) to Console/terminal
        new winston_1.transports.Console({
            //levels: winston.config.npm,
            handleExceptions: true,
        })
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbC9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0Q7QUFDeEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLGdCQUFNLENBQUM7QUFFOUMsUUFBQSxNQUFNLEdBQUcsc0JBQVksQ0FBQztJQUMxQixLQUFLLEVBQUMsTUFBTTtJQUNaLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE1BQU0sRUFBRTtJQUN2QixVQUFVLEVBQUU7UUFDViwrRkFBK0Y7UUFDL0YsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQztZQUVsQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDJCQUEyQjtZQUMzQixPQUFPLEVBQUMsT0FBTztZQUNmLFFBQVEsRUFBRSxDQUFDO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtTQUV6QixDQUFDO1FBQ04seURBQXlEO1FBQ3JELElBQUksb0JBQVUsQ0FBQyxPQUFPLENBQUM7WUFDckIsNkJBQTZCO1lBQzNCLGdCQUFnQixFQUFFLElBQUk7U0FFekIsQ0FBQztLQUVIO0NBRUYsQ0FBQyxDQUFDIn0=