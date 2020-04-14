import Bee from "bee-queue";

import CancelationMail from "../app/jobs/CancelationMail";
import redisConfig from "../config/redis";

const jobs = [ CancelationMail ];

class Queue {

    constructor() {
        this.queues = {};

        this.init();
    }

    init() {
        jobs.forEach(({key, handle}) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis: redisConfig,
                }),
                handle,
            };
        });
    }

    addJob(queue, data) {
        return this.queues[queue].bee.createJob(data).save();
    }

    processQueue() {
        jobs.forEach(job => {
            const { bee, handle } = this.queues[job.key];

            bee.on('failed', this.handleFailure).process(handle);
        });
    }

    handleFailure(job, err){
        console.log(`Queue ${job.queue.name}: Falhou`, err);        
    }
}

export default new Queue();