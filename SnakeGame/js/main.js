alert('ヘビを10まで伸ばそう！');
ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2,canv.height/2,20,20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  px2 += xd;
  py2 += yd;
  px3 += xd;
  py3 += yd;
  snake.push({x:px,y:py});
  for(let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE,snake[i].y*SIZE,SIZE-2,SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while(snake.length>tail){
    snake.shift();
  }
  if(appleX == px && appleY == py){
    tail ++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * SIZE,appleY * SIZE,SIZE-2,SIZE-2);

  if(appleX2 ==  px2 && appleY2 == py2){
    tail --;
    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "purple";
  ctx.fillRect(appleX2*SIZE, appleY2*SIZE, SIZE-2, SIZE-2);

  if(appleX3 ==  px3 && appleY3 == py3){//FPS加速りんご作ろうとしたけどできませんでした。；；
    FPS += 10;
    appleX3 = Math.floor(Math.random()*canv.width/SIZE);
    appleY3 = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "skyblue";
  ctx.fillRect(appleX3*SIZE, appleY3*SIZE, SIZE-2, SIZE-2);

  if(snake.length<1){
    document.location.reload();
    alert('毒リンゴ食べ過ぎ！')
  }

  if(snake.length == 10){
    document.location.reload();
    alert('おめでとう！ヘビの長さが１０に達したよ！');
  }

},1000/FPS);
