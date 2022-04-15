function newImage(source, position, left, bottom){
    let object = document.createElement('img')
    object.src = source;
    object.style.position = 'fixed';
    object.style.left = left;
    object.style.bottom = bottom;
    document.body.append(object);
    return object;
}

function newItem(source, position, left, bottom){
    let object = newImage(source, position, left, bottom)

    object.addEventListener('dblclick', function() {
        object.remove()
    })
}

for (let i=0; i<(window.innerWidth/100); i += 1){
    for(j=5; j<(window.innerHeight/100); j += 1){
        newImage('assets/sky.png', 'fixed', (i*100) + 'px', (j*100) + 'px');
    }
}

for (let i=0; i<(window.innerWidth/100); i += 1){
    for(j=0; j<((window.innerHeight/100)-3); j += 1){
        newImage('assets/grass.png', 'fixed', (i*100) + 'px', (j*100) + 'px');
    }
}

newImage('assets/green-character.gif', 'fixed', '100px', '100px');
newImage('assets/pine-tree.png', 'fixed', '450px', '200px');
newImage('assets/tree.png', 'fixed', '200px', '300px');
newImage('assets/pillar.png', 'fixed', '350px', '100px');
newImage('assets/crate.png', 'fixed', '150px', '200px');
newImage('assets/well.png', 'fixed', '500px', '425px');

newItem('assets/sword.png', 'fixed', '500px', '405px');
newItem('assets/shield.png', 'fixed', '165px', '185px');
newItem('assets/staff.png', 'fixed', '600px', '100px');