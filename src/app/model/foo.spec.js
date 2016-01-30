/**
 * Created by jdsco on 1/30/2016.
 */
'use strict';

import {expect} from 'chai';
import {Foo} from './foo';

describe('Foo', function(){
    it('should have a data property', function(){
        expect(Foo.prototype.data).to.exist;
    })
});