$(function(){
    if($('html[lang]').length == 0){
        console.log('nao definiu idioma');
    }

    if($('meta[name="description"]').length == 0){
        console.log('nao definiu description');
    }

    if($('meta[name="keywords"]').length == 0){
        console.log('nao definiu keywords');
    }

    if($('title').length == 0){
        console.log('nao definiu title');
    }

    if($('header').length == 0){
        console.log('nao usou html5 - sem header');
    }

    if($('footer').length == 0){
        console.log('nao usou html5 - sem footer');
    }

    if($("input[type='email']").length == 0){
        console.log('nao usou html5 e nao validou form com html5 - sem email');
    }

    if($("input[type='number']").length == 0){
        console.log('nao usou html5 e nao validou form com html5 - sem number');
    }

    if($('*[style]').length > 0){
        console.log('usou style nos elementos');
    } 

    if($('link').length == 0){
        console.log('nao separou o css do html');
    }

    if($('table').length == 0){
        console.log('nao usou tabela');
    }

    if($('script').length == 0){
        console.log('nao usou script separado');
    }

    if($('meta[name="viewport"]').length == 0){
        console.log('nao definiu viewport');
    }
})
