function game(){
    
    let pScore = 0;
    let cScore = 0;

    
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        const hands = document.querySelectorAll('.hands img');
        

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.match .player-hand');
        const computerHand = document.querySelector('.match .computer-hand');

        const handList = ['scissors','rock', 'paper'];
        
        options.forEach( (option)=>{
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random()*3);
                const winner = document.querySelector('.winner');
                

                setTimeout(() => {
                    //비교후 점수올려놓고 타이틀수정
                    result = compareHans(parseInt(this.value), parseInt(computerNumber) );
                    winner.textContent = result;
                    
                    //올려놓은 점수로 보드판수정
                    updateScore();
                    //손가락이미지수정
                    playerHand.src = `./assets/${handList[this.value]}.png`
                    computerHand.src = `./assets/${handList[parseInt(computerNumber)]}.png`
                
                    playerHand.style.animation = '';
                    computerHand.style.animation = '';
                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                winner.textContent = '???';
            

            })
        })
        
    }

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-board p');
        const computerScore = document.querySelector('.computer-board p');
        
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHans = (playerN,computerN) =>{
        result = playerN - computerN;
        if (result===-1 | result===2){
            cScore++;
            return "졌습니다"
        }else if(result===-2 | result===1){
            pScore++;
            return "이겼습니다"
        }else{
            return "비겼습니다"
        }
        
    }




    startGame();
    playMatch();
}


game();