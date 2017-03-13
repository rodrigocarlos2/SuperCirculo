
var fase_fake=0;
var score_fake;

varlimitTime = 60;

var Circle = function(e){

  var fase_temp = 0;

  if($.jStorage.get('fase')!=null){
    fase_temp = $.jStorage.get('fase');
  }

  this.element = e;
  this.diameter = 22 + Math.random() * 50;
  this.speed = 500 + ((fase_temp+1)*100) + Math.random() * 1500;

  this.element.css({
    width: this.diameter,
    height: this.diameter,
    top: this.newPosition(),
    left: this.newPosition()
  });

};

Circle.prototype.newPosition = function() {
  return Math.random() * (325 - this.diameter);
}

Circle.prototype.listen = function(){

  var that = this;
  this.element.on('click', function(e) {
    that.kill();
  });

}

Circle.prototype.move = function() {
  var that = this;
  this.element.animate({
      top: this.newPosition(),
      left: this.newPosition()
    }, {
      duration: this.speed,
      complete: function() {
        that.move();
      }
    });
}

Circle.prototype.kill = function() {
  this.element.css('background-color', 'red')
    .effect({
      effect: 'explode',
      duration: 150,
      complete: function(){
        window.score.increase();
        $(this).off('click');
      },
      queue: false
    });
}

var Score = function(e) {
  this.element = e;
};

Score.prototype.current = function() {
  return this.element.html();
}

Score.prototype.reset = function() {
  this.element.html(0);
};

Score.prototype.increase = function(){

  var newScore = parseInt(this.current()) + 100;

  score_fake = score_fake+100;

  if(score_fake==1000){

    if(fase_fake<=5){

      alert('Próxima fase!');
      fase_fake++;

      $.jStorage.set("fase", fase_fake);
      //$.jStorage.setTTL("fase", 120000); // 120 segundos

      location.reload();
    }

  }

  this.element.html(newScore);

};

$(document).ready(function(){

  if($.jStorage.get('fase')!=null){
    fase_fake = $.jStorage.get('fase');
  }

  if(fase_fake<6){
    alert('Fase: '+(fase_fake+1));
  }

  if(fase_fake==0){

      score_fake = 0;

      var duration = 30000; // 30 seconds

      window.score = new Score($('#score'));

      window.score.reset();

      document.getElementById("data").innerHTML=30;

      $.each($('.circle'), function() {
        var circle = new Circle($(this));
        circle.listen();
        circle.move();
      });

      setTimeout(function(){
        
        alert("GAME OVER!");

        window.location.reload();

        //$.each($('.circle'), function() {
          //$(this).off('click');
          //$(this).hide();
        //});

      }, duration);

  }

  if(fase_fake==1){

    score_fake = 0;

      var duration = 25000; // 25 seconds
      window.score = new Score($('#score'));
      window.score.reset();

      document.getElementById("data").innerHTML=25;

      $.each($('.circle'), function() {
        var circle = new Circle($(this));
        circle.listen();
        circle.move();
      });

      setTimeout(function() {
        
        //alert("GAME OVER!");

        window.location.reload();

        //$.each($('.circle'), function() {
          //$(this).off('click');
          //$(this).hide();
        //});

      }, duration);

  }

  if(fase_fake==2){

    score_fake = 0;

      var duration = 20000; // 20 seconds
      window.score = new Score($('#score'));
      window.score.reset();

      document.getElementById("data").innerHTML=2;

      $.each($('.circle'), function(){
        var circle = new Circle($(this));
        circle.listen();
        circle.move();
      });

      setTimeout(function(){
        
        alert("GAME OVER!");

        window.location.reload();

        //$.each($('.circle'), function() {
          //$(this).off('click');
          //$(this).hide();
        //});

      }, duration);

  }

  if(fase_fake==3){

    score_fake = 0;

      var duration = 15000; // 15 seconds
      window.score = new Score($('#score'));
      window.score.reset();

      document.getElementById("data").innerHTML=15;

      $.each($('.circle'), function(){
        var circle = new Circle($(this));
        circle.listen();
        circle.move();
      });

      setTimeout(function(){
        
        alert("GAME OVER!");

        window.location.reload();

        //$.each($('.circle'), function() {
          //$(this).off('click');
          //$(this).hide();
        //});

      }, duration);

  }

  if(fase_fake==4){

    score_fake = 0;

      var duration = 10000; // 10 seconds
      window.score = new Score($('#score'));
      window.score.reset();

      document.getElementById("data").innerHTML=10;

      $.each($('.circle'), function(){
        var circle = new Circle($(this));
        circle.listen();
        circle.move();
      });

      setTimeout(function(){
        
        alert("GAME OVER!");

        window.location.reload();

        //$.each($('.circle'), function() {
          //$(this).off('click');
          //$(this).hide();
        //});

      }, duration);

  }

  if(fase_fake==5){

    score_fake = 0;

      var duration = 5000; // 5 seconds
      window.score = new Score($('#score'));
      window.score.reset();

      document.getElementById("data").innerHTML=5;

      $.each($('.circle'), function(){
        var circle = new Circle($(this));
        circle.listen();
        circle.move();
      });

      setTimeout(function(){
        
        alert("Game Over!");

        window.location.reload();

        //$.each($('.circle'), function() {
          //$(this).off('click');
          //$(this).hide();
        //});

      }, duration);

  }

  if(fase_fake>5){
    //alert('Você concluiu, parabéns! Reiniciando o Jogo.');
    $.jStorage.set("fase", 0);
    fase_fake=0;
    location.reload();
  }

});
