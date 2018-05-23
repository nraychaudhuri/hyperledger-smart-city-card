/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Pay for the the cityService
 * @param {org.city.columbus.PayForService} pay - the trade to be processed
 * @transaction
 */
async function payForService(pay) {

    let fee = payAmount(pay.service)
    pay.cardToUse.balance -= fee;
    let cardRegistry = await getAssetRegistry('org.city.columbus.SmartCard') ;  
    await cardRegistry.update(pay.cardToUse);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.city.columbus', 'PaymentSuccessful');
    event.service = pay.service;
    event.amountPaid = fee;
    event.time = new Date();
    emit(event);
} 


function payAmount(service) {
    return service.serviceFee; 
}



