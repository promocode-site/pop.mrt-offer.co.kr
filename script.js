function copyCoupon(code) {
    const registrationWindow = window.open('https://new.pdpop.com/', '_blank');
    if (!registrationWindow) {
        window.location.assign('https://new.pdpop.com/');
    }

    // 클립보드 복사
    const tempInput = document.createElement('input');
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('쿠폰 코드가 복사되었습니다: ' + code + '\n확인을 누르면 등록 페이지로 이동합니다.');
    
}

function calculateValue() {
    const points = document.getElementById('points').value;
    const resultDiv = document.getElementById('calc-result');
    
    if (!points || points <= 0) {
        resultDiv.innerText = '포인트를 입력해 주세요.';
        return;
    }
    
    // 자체 분석 가치 환산 (1포인트 = 약 0.5원 가치 가정)
    const value = Math.floor(points * 0.5);
    resultDiv.innerText = `입력하신 ${Number(points).toLocaleString()}포인트의 실제 혜택 가치는 약 ${value.toLocaleString()}원입니다.`;
}

function convertCoupon() {
    const type = document.getElementById('coupon-type').value;
    const resultDiv = document.getElementById('convert-result');
    
    // 영화 편수 환산 (편당 평균 1,500포인트 가정)
    const movies = Math.floor(type / 1500);
    resultDiv.innerText = `이 쿠폰으로 최신 영화 약 ${movies}편을 무료로 감상하실 수 있습니다!`;
}
