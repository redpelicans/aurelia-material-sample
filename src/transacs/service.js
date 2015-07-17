import io from 'socket.io-client';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export default class TransacService {
  constructor(eventAggregator){
    console.log('Init socket IO and EventAggregator ...');
    this.socket = io("http://rp1.redpelicans.com:3005");
    this.eventAggregator = eventAggregator;
    this.serverSubscribe();
  }

  serverSubscribe(){
    this.socket.on('transacs:event', event => {
      this.eventAggregator.publish('transacs:event', event);
    });
  }

  subscribe(cb){
    return this.eventAggregator.subscribe('transacs:event', cb);
  }

  load(params){
    let promise = new Promise( (resolve, reject) =>{
      this.socket.emit('transacs:load', params, (err, transacs) => {
        if(err)return reject(err);
        resolve(transacs);
      });
    })
    return promise;
  }
}
