import {computedFrom} from 'aurelia-framework';
import _ from 'lodash';
import moment from 'moment';

export function makeNode(obj){
  if(!obj)return;
  switch(obj.type){
    case 'transac':
      return new Transac(obj);
    case 'event':
      return new Event(obj);
    case 'message':
      return new Message(obj);
  }
}

class Node {
  constructor({id, label, transacId, parentId, type, createdAt} = {}){
    this.id = id;
    this.createdAt = moment(createdAt);
    this.transacId = transacId;
    if(parentId) this.parentId = parentId;
    this.type = type;
    this.label = label;
    this.status = 'ok';
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
    node.parent = this;
    this.updateStates(node);
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

  get transac(){
    if(!this.parent)return this;
    return this.parent.transac;
  }

}

export class Transac extends Node {

  constructor(options){
    super(options);
    if(options.valueDate) this.valueDate = moment(options.valueDate, "DD/MM/YYYY");
    _.extend(this, _.pick(options, 'server', 'user', 'processId'));
    this.isRunning = true;
    this.status = 'ok';
    this.isLocked = options.locked;
    this.isCompound = options.compound;
  }

  updateStates(node){
    if(node.isMessage()){
      if(node.level === 'commit' || node.level === 'abort') this.isRunning = false;
      this.delay = node.createdAt - this.createdAt;
      if(node.status === 'error') this.status =  'error';
      else if(this.status != 'error' && node.level === 'warning') this.status =  'warning';
    }
    if(this.parent) this.parent.updateStates(node);
  }

  @computedFrom('status')
  get statusIcon(){
    switch(this.status){
      case 'ok':
        return 'glyphicon glyphicon-chevron-down green-icon';
      case 'warning':
        return 'glyphicon glyphicon-warning-sign orange-icon';
      case 'error':
        return 'glyphicon glyphicon-minus-sign red-icon';
    }
  }
 
  @computedFrom('isRunning')
  get runningIcon(){
    return (this.isRunning ? 'glyphicon glyphicon-time green-icon' : 'glyphicon glyphicon-remove green-icon');
  }

  @computedFrom('isCompound')
  get compoundIcon(){
    if(this.isCompound) return 'glyphicon glyphicon-th-large blue-icon';
  }

  @computedFrom('isLocked')
  get lockIcon(){
    if(this.isLocked) return 'glyphicon glyphicon-lock gray-icon';
  }

}

export class Event extends Node{
  constructor(options){
    super(options);
  }

  updateStates(node){
    if(node.isMessage()){
      if(node.status === 'error') this.status =  'error';
      else if(this.status != 'error' && node.level === 'warning') this.status =  'warning';
    }
    if(this.parent) this.parent.updateStates(node);
  }
}

export class Message extends Node{
  constructor(options){
    super(options);
    this.level = options.level;
    if(this.level === 'abort' || this.level === 'error') this.status =  'error';
    else this.status =  this.level;
  }
}



