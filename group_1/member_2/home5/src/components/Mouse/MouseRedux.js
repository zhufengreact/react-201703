let timer;
let getRound
export function Hit(id){
    return (dispatch, getState) => {
        dispatch({type: "HIT", id: id});
    }
}
export function Start(){
	return (dispatch, getState) => {
		let round = () => {
			getRound = setTimeout(function(){
				let data = getState();
				let hasUnhitMouse = data.items.find(item => item.img === 'mouse');
				let hasHitMouse = data.items.find(item => item.img === 'mouse_cry');
				console.log(hasUnhitMouse , hasHitMouse, '77777');
				// 如果所有地鼠都被击打过，则进入下一回合；
				if(!hasUnhitMouse && !!hasHitMouse){
					console.log('11111111111111111111')
					clearTimeout(getRound);
					alert('Win, all mouses are hit! Next round!');
					round();
					return;
				}else if(!!hasUnhitMouse && !hasUnhitMouse){
					console.log('2222222222222222222')
					// 如果有没有打击过的地鼠，则Game Over
					clearInterval(timer);
					clearTimeout(getRound);
					alert('Game Over');
					return;
				}

				if(data.count > 5){
					console.log('3333333333333333333333')
					clearInterval(timer);
					clearTimeout(getRound);
					alert('Round ' + data.count + ', pass!');
					return;
				}

				data.count++;

				console.log('4444444444444444444444444',data.count)
			}, 2000)
		}
		if(!getRound){
			console.log(!getRound, '!!!!!!!!!!')
			round();
		}
		timer = setInterval(() => {
			return dispatch({type: "BEGIN"});
		}, 1000)
	}
}
export function MouseReducer(data=[], action){
    switch(action.type){
        case "HIT":
            let afterHit = {};
            data.items.forEach((item) => {
                if(item.id === action.id){
                    item.img = 'mouse_cry';
                }
            })
            Object.assign(afterHit, data);
            return afterHit;
	    case "BEGIN":
            // reducer里面，修改值一定要是覆盖的修改
            let obj = {};
            let id = Math.floor(Math.random()*10);
		    data.items.forEach(item => {
		    	if(item.id == id && item.img === 'mouse'){
		    		item.isShow = true;
			    }else{
		    		item.isShow = false;
			    }
		    })
            data.ready = true;
		    return Object.assign(obj, data);
        default:
            return data;
    }
}