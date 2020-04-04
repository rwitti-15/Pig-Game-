var scores, roundScore, activePlayer, gamePlaying;


newGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying)
	{
		var dice= Math.floor(Math.random()*6)+1;
		var diceDOM = document.querySelector('.dice')
		diceDOM.style.display= 'block';
		diceDOM.src='dice-'+dice+'.png';
		if(dice>1)
		{
			roundScore+=dice;
			document.getElementById('current-' +activePlayer).textContent=roundScore;
		}
		else
		{	
			nextPlayer();
		}
		
	}
		   
		
		});
		document.querySelector('.btn-hold').addEventListener('click', function() {
			if(gamePlaying)
			{
				scores[activePlayer]+=roundScore;
			
			document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
			
			 if(scores[activePlayer]>=50){
				 
				 document.getElementById('name-' +activePlayer).textContent="WINNER!";
				 document.querySelector('.dice').style.display ='none';	
				 document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');				 
				 document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
				 gamePlaying=false;
			 }
			 else
			 {
				nextPlayer();
			 }
				
			}
			
		});
		document.querySelector('.btn-new').addEventListener('click', newGame);
		function nextPlayer()
		{			
			roundScore=0;
			document.getElementById('current-' +activePlayer).textContent=roundScore;
			
			activePlayer === 0 ? activePlayer = 1: activePlayer=0;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.querySelector('.dice').style.display ='none';	 
		};
		


		function newGame()
		{	
			gamePlaying= true; 
			scores=[0,0];
			roundScore =0;
			activePlayer =0 ;
			document.querySelector('.dice').style.display ='none';
			document.getElementById('score-0').textContent='0';
			document.getElementById('score-1').textContent='0';
			document.getElementById('current-0').textContent='0';
			document.getElementById('current-1').textContent='0';
			document.getElementById('name-0').textContent='Player 1';
			document.getElementById('name-1').textContent='Player 2';
			document.querySelector('.player-0-panel').classList.remove('winner');
			document.querySelector('.player-1-panel').classList.remove('winner');				 			
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');
		};


//document.querySelector('#current-'+ activePlayer).textContent= dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
 