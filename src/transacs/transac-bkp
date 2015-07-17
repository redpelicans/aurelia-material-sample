import moment from 'moment';
import _ from 'lodash';
import async from 'lodash';
import uuid from 'uuid';
import {dmy} from '../helpers';

class Node {
  constructor({label, transacId, parentId, type} = {}){
    this.id = uuid();
    this.createdAt = new Date();
    this.transacId = transacId;
    if(parentId)this.parentId = parentId;
    this.type = type;
    this.label = label;
  }

  isTransac(){
    return this.type === 'transac';
  }

  isEvent(){
    return this.type === 'event';
  }

  isMessage(){
    return this.type === 'message';
  }


  get children(){
    return this._children || [];
  }

  addChild(node){
    if(!this._children) this._children = [];
    this._children.push(node);
    node.parentId = this.id;
    return this;
  }

  isLeaf(){
    return !this.length;
  }

  [Symbol.iterator](){
    let done = {}, node, remainingNodes = [this];
    function iterate(nodes){
      let child = nodes[0];
      if(!child) return [null, []];
      if(child.isLeaf() || done[child.id]) return [child, nodes.slice(1)];
      nodes.splice(0, 0, ...child.children);
      done[child.id] = true;
      return iterate(nodes);
    }

    return {
      [Symbol.iterator](){
        return this;
      },
      next(){
        [node, remainingNodes] =  iterate(remainingNodes);
        if(node)return {value: node};
        else return {done: true};
      }
    }
  }

  get status(){
    if(this.hasStatuses(['error', 'abort'])) return 'error';
    if(this.hasStatuses(['warning'])) return 'warning';
    return 'ok';
  }

  hasStatuses(statuses){
    return _.some(this.children, function(child){return _.contains(statuses, child.status)});
  }

  hasLevel(level){
    return _.some(this.children, function(child){return child.level === level});
  }

  get length(){
    return this.children.length;
  }

  get lastChild(){
    return this.children && this.children[this.length - 1];
  }

  get lastMessage(){
    // BUG with Babel
    //let nodes = _.filter([...this], node => node.isMessage());
    let nodes = [];
    for (let node of this) if(node.isMessage()) nodes.push(node); 
    return nodes[nodes.length-1];
  }

  get lastMessageTime(){
    let lastMessage = this.lastMessage;
    return lastMessage && lastMessage.createdAt;
  }


}

export function bless(obj){
  if(!obj)return;
  switch(obj.type){
    case 'transac':
      obj.__proto__ = Transac.prototype;
      break
    case 'event':
      obj.__proto__ = Event.prototype;
      break
    case 'message':
      obj.__proto__ = Message.prototype;
      break
  }
  return obj;
}


export class Transac extends Node {

  constructor({label, valueDate=moment().startOf('day').toDate(), parentId, server, user, processId, locked=false, compound=false, transacId} = {}){
    super({label: label, parentId: parentId, transacId: transacId, type: 'transac'});
    if(!this.transacId) this.transacId = this.id;
    this.valueDate = valueDate;
    if(server) this.server = server;
    if(user) this.user = user;
    if(processId) this.processId = processId;
    if(locked) this.locked = locked;
    if(compound){ this.compound = true };
  }

  static get collection(){ 
    return "transacs";
  }

  static makeCompoundRoot(transac){
    let root = new Transac({label: transac.label, valueDate:transac.valueDate, compound: true, transacId: transac.transacId});
    root._children = [];
    root.root = true;
    return root;
  }

  // to keep compatible with older version
  addEvent(event){
    let transac = this;
    if(transac.lastChild && transac.lastChild.isTransac()) return transac.lastChild.addEvent(event);
    transac.addChild(event);
    return this;
  }

  isCompound(){
    return this.compound;
  }

  isLocked(){
    return this.locked;
  }

  isRunning(){
    //return !this.hasStatuses(['abort', 'commit']);
    let lastMessage = this.lastMessage;
    return !lastMessage || !_.contains(['abort', 'commit'], lastMessage.level);
  }

  get delay(){
    let lastMessage = this.lastMessage;
    if(lastMessage) return lastMessage.createdAt - this.createdAt;
    else return 0;
  }

  toSummaryJSON(){
    return {
      id: this.id,
      transacId: this.transacId,
      label: this.label,
      valueDate: dmy(this.valueDate),
      createdAt: +this.createdAt,
      lastMessageTime: this.lastMessageTime && +this.lastMessageTime,
      locked: this.isLocked(),
      status: this.status,
      isRunning: this.isRunning(),
      isCompound: this.isCompound(),
      server: this.server,
      delay: this.delay
    }
  }

  toJSON(){
    return {
      id: this.id,
      type: this.type,
      transacId: this.transacId,
      label: this.label,
      valueDate: dmy(this.valueDate),
      createdAt: +this.createdAt,
      lastMessageTime: this.lastMessageTime && +this.lastMessageTime,
      locked: this.isLocked(),
      status: this.status,
      isRunning: this.isRunning(),
      isCompound: this.isCompound(),
      server: this.server,
      processId: this.processId,
      user: this.user,
      delay: this.delay,
      children: _.map(this.children, child => child.toJSON()),
    }
  }


}


export class Event extends Node{
  constructor({transacId, parentId, label} = {}){
    super({label: label, transacId: transacId, parentId: parentId, type: 'event'});
  }

  toJSON(){
    return {
      id: this.id,
      type: this.type,
      transacId: this.transacId,
      status: this.status,
      label: this.label,
      children: _.map(this.children, child => child.toJSON()),
      createdAt: +this.createdAt
    }
  }
}

export class Message extends Node{
  constructor({transacId, parentId, level='ok', label} = {}){
    super({label: label, transacId: transacId, parentId: parentId, type: 'message'});
    this.level = level;
  }

  get status(){
    if(this.level === 'abort' || this.level === 'error') return 'error';
    if(this.level === 'warning') return 'warning';
    return 'ok';
  }

  toJSON(){
    return {
      id: this.id,
      type: this.type,
      transacId: this.transacId,
      label: this.label,
      level: this.level,
      status: this.status,
      createdAt: +this.createdAt
    }
  }
}

