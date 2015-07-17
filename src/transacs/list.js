import {inject} from 'aurelia-framework';
import _ from 'lodash';
import TransacService from './service';
import {Transac, makeNode} from './index';

@inject(TransacService)
export class TransacList {
  constructor(service){
    this.transacService = service;
    this.eventsCache = {};
    this.transacs = [
      //{label: 'test', server: 'rp', valueDate: new Date, createdAt: new Date(), delay:15}
    ];
    this.from = new Date(2014,1,1);
    this.to = new Date();
    this.dateMode = "Processing Date";
    this.dateModes = ["Processing Date", "Value Date"];
    this.sortColumn = 'name';
    this.sortOrder = 'asc';
  }

  reverseSortOrder(){
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  sortTable(column){
    if(this.sortColumn === column) this.reverseSortOrder();
    this.sortColumn = column;
    this.doSortTable();
  }

  doSortTable(){
    this.transacs = _.sortByOrder(this.transacs, [this.sortColumn], [this.sortOrder]);
  }

  addCache(event){
    // check existence !!!
    let node = makeNode(event);
    this.eventsCache[node.id] = node;
    let parent = this.eventsCache[node.parentId];
    if(parent) parent.addChild(node);
    //let transac = this.eventsCache[node.transacId];
    //console.log(transac && {label: transac.label, isRunning: transac.isRunning})
    return node;
  }

  loadData(){
    let params = {
      from: moment(this.from).format('DD/MM/YYYY'),
      to: moment(this.to).format('DD/MM/YYYY'),
      dateMode: this.dateMode === 'Value Date' ? 'valueDate' : 'createdAt'
    };

    //console.log(params);
    this.unsubscribeHandler = this.transacService.subscribe( event => {
      let node = this.addCache(event);
      if(node.isTransac()) this.transacs.push(node);
    });

    return this.transacService.load(params)
      .then(events => {
        if(events){ 
          for(let event of events){
            let node = this.addCache(event);
            if(node.isTransac()) this.transacs.push(node);
          }
          this.doSortTable();
          console.log(this.transacs)
        }
      })
      // TODO
      .catch(err => console.log(err));
  }

  activate(params){
    return this.loadData();
  }

}
