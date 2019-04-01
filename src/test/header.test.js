import React from 'react';
import Expect from 'expect';
import {configure, shallow,mount} from 'enzyme';
import Header from '../../src/components/Header';
import Adaptor from 'enzyme-adapter-react-16'

configure({adapter: new Adaptor()})
describe('Component: Header',()=>{

    const minProps={
        name:''
    }
    it('Renders Without Exploding',()=>{

        expect(
            shallow(
                    <Header {...minProps} />
            ).length
        ).toEqual(1);
    });

    it('Checking if Header has class ',()=> {
        var nme = 'bala';
        const headerWrapper = shallow(<Header {...minProps} />)
        console.log(headerWrapper)
      //  headerWrapper.setProps({name:nme})
        expect(headerWrapper.find('#header')).to.have.length(1);
      // expect(headerWrapper.find().hasClass('headerDisplay')).toEqual(true);
    })
})