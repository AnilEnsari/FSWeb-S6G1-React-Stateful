/*
SAYAÇ Talimatları

Aşağıdaki kısa videoyu izleyin, UI ve Chrome Devtools'a dikkat edin:
https://www.ergineer.com/assets/materials/a664dfe7-sayac.gif

Bu Sayacı oluşturmak için kaç adet state dilimine ihtiyacınız var? Başlamadan önce biraz üzerine düşünün!

Saf bir geliştirici 3 farklı state dilimi diyebilir:
  - Sayıcı
  - Metnin kırmızı mı yoksa mavi mi olduğu
  - Metnin "çift" mi yoksa "tek" mi olduğu

Ancak burada sadece bir state gereklidir: sayici!
Diğer şeyler basitçe sayımın kendisinden türetilebilir.

ADIM 0:
  Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  State hookunu kullanara, bir 'sayici', 'setSayici' çifti oluşturun.
  'sayici' state'inin ilk değeri 0 olarak yüklenmelidir.

ADIM 2:
  'stil' nesnesinde 'color' niteliği sabit olarak "royalblue" olarak belirlenmiştir.
  Bunun yerine 'color' değerinin ne olması gerektiği, şu şekilde belirlenmelidir:
  Eğer sayici çiftse "royalblue", değilse "crimson" olmalıdır.

ADIM 3:
  JSX'teki bazı sabit kodlanmış bilgileri, kıvrımlı parantezler ({}) içinde enterpolasyonlu ifadelerle değiştirmemiz gerekiyor.
  Sabit olarak yazılmış "0" sayısını {sayici} değişkeni ile değiştirerek başlayın.
  Sonra "çift" kelimesini şu kurala göre değiştirin: {eğer sayıcı çiftse, kelime `çift` değilse `tek` olacak}.

ADIM 4:
  Bu click handler'ın, "sayici" stateini artı bir yapacak şekilde programlamak için "setSayici"i kullanması gerekiyor.
  Bu state değişiklikleri senkronize değil: güncellenen sayım, Sayac bileşeninin bir sonraki çalıştırmasında da gelir.
  Sakın basitçe sayici++ yapmayın. Artı artı yasak! Bu tarz artırım bir sonraki çağırımda gelmez. Her zaman state'e yeni değer 
  atamak için state güncelleyici kullanmalısınız.

ADIM 5:
  Bu click handler 'sayici' yi bir azaltmak için 'setSayici' ı kulanacak.
  sayici-- SAKIN kullanmayın. Bu tarz kullanım bir sonraki çalıştırmada gelmez.

ADIM 6:
	Bu click handler 'sayici' yı sıfırlamak için 'setSayici' yi kullanacak.
// */
// import { useState } from "react";

// const Counter = function () {
//   const [sayac, setSayac] = useState(100);
//   const [artisMiktari, setArtisMiktari] = useState(1);

//   const arttir = () => {
//     console.log(`setter öncesi sayac: ${sayac}`);
//     setSayac(sayac + 1);
//     console.log(`setter sonrası sayac: ${sayac}`);
//   };

//   const azalt = () => {
//     setSayac(sayac - 1);
//   };

//   console.log("Bu renderda sayac değeri: ", sayac);

//   return (
//     <div>
//       <h3>Counter: {sayac}</h3>
//       <button onClick={arttir}> + Arttır</button>
//       <button onClick={azalt}> - Azalt</button>
//     </div>
//   );
// };

// export default Counter;

import React, { useState } from 'react'; /* ADIM 0 buraya*/

export default function Sayac() {
  /* ADIM 1 buraya*/
	const [sayici,setSayici]=useState(0)
	
  const artirici = () => {setSayici(sayici+1)
    /* ADIM 4 buraya */
  };
  const azaltici = () => {setSayici(sayici-1)
    /* ADIM 5 */
  };
  const reset = () => {setSayici(0)
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'royalblue',/* ADIM 2 */
    
  };
  const stildiv = document.querySelector(".stil")
  if (sayici%2 ===1){stildiv.setAttribute("color","crimson")} else {stildiv.setAttribute("color","royalblue")}
  let kelime = "çift"
  if (sayici%2 ===1){kelime = "tek"} else {kelime = "çift"}


  return (
    <div className='widget-counter container'>
      <h2>Sayaç</h2>
      <div id='sayici' style={stil}>
        Sayı {sayici} {kelime/* ADIM 3  buraya*/ }
      </div>
      <div>
        <button id='artirici' onClick={artirici}>Artırıcı</button>
        <button id='decrement' onClick={azaltici}>Azaltıcı</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  )  };

