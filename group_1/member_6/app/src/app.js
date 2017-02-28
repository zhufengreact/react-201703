import $ from 'jquery';

require.ensure([],()=>{

    const library=require('some-big-library');
    $("foo").click(()=>library.doSomething());
});