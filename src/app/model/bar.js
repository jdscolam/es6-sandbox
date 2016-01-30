'use strict';
import {dependencies} from 'needlepoint'
import {Foo} from './foo'

@dependencies(Foo)
export class Bar{
    constructor(foo){
        this.foo = foo;
    }
}