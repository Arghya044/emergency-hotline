
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

 
function updateNavbar() {
    document.getElementById('love-number').textContent = heartCount;
    document.getElementById('coin-number').textContent = coinCount;
    document.getElementById('copy-number').textContent = copyCount;
}


function handleHeartClick(button) {
    heartCount++;
    updateNavbar();
}


function handleCopyClick(button) {
    const number = button.getAttribute('data-number');
    
    
    navigator.clipboard.writeText(number).then(() => {
        copyCount++;
        updateNavbar();
        alert(`Number ${number} copied to clipboard!`);
    }).catch(() => {
        
        const textArea = document.createElement('textarea');
        textArea.value = number;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyCount++;
        updateNavbar();
        alert(`Number ${number} copied to clipboard`);
    });
}


function handleCallClick(button) {
    const number = button.getAttribute('data-number');
    const service = button.getAttribute('data-service');
    
    
    if (coinCount < 20) {
        alert('You need at least 20 coins to make a call.');
        return;
    }
    
    
     coinCount -= 20;
    updateNavbar();
    
    
    alert(`Calling ${service}: ${number}`);
    
      
    addToCallHistory(service, number);
}


function addToCallHistory(serviceName, number) {
    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
            minute: '2-digit',
         second: '2-digit',
        hour12: true 
    });
    
    const callItem = {
        service: serviceName,
        number: number,
        time: currentTime
    };
    
    
    callHistory.unshift(callItem);
    updateCallHistoryDisplay();
}


function updateCallHistoryDisplay() {
    const historyContainer = document.getElementById('call-history-list');
    
    if (callHistory.length === 0) {
        historyContainer.innerHTML = `
            <div class="text-center text-gray-500 py-8">
                No call history
            </div>
        `;
        return;
    }
    
    historyContainer.innerHTML = callHistory.map(call => `
        <div class="bg-[#fafafa] rounded-lg p-4 mb-3 w-full max-w-[352px] h-[85px] flex items-center justify-between">
            <div class="flex-1">
                <h1 class="text-[18px] font-semibold text-gray-900 leading-tight mb-1">${call.service}</h1>
                <p class="text-[18px] font-normal text-gray-500">${call.number}</p>
            </div>
            <div class="flex items-center ml-4">
                <span class="text-gray-600 text-sm font-medium">${call.time}</span>
            </div>
        </div>
    `).join('');
}


function clearHistory() {
    callHistory = [];
    updateCallHistoryDisplay();
    alert('Call history cleared!');
}


document.addEventListener('DOMContentLoaded', function() {
    

    document.querySelectorAll('.heart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleHeartClick(this);
        });
    });
    
    
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleCopyClick(this);
        });
    });
    
    
    document.querySelectorAll('.call-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleCallClick(this);
        });
    });
    
    
    const clearButton = document.getElementById('clear-history-btn');
    if (clearButton) {
        clearButton.addEventListener('click', function(e) {
            e.preventDefault();
            clearHistory();
        });
    }
    
   
    updateNavbar();
    updateCallHistoryDisplay();
});