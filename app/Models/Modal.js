export default class Modal {
    constructor({ title, inp1, inp2, inp3, inp4, inp5, inp6 }) {

    }

    get Template() {
        return /*html*/`
        <div class="modal fade" id="new-car-modal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">NEW CAR FORM</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onsubmit="app.carsController.createCar()">
                                    <input type="text" id="make" placeholder="make" required>
                                    <input type="text" id="model" placeholder="model" required>
                                    <input type="number" id="year" placeholder="year" required min="1885" value="2020">
                                    <input type="number" id="price" placeholder="price" required min="1">
                                    <input type="text" id="description" placeholder="description">
                                    <input type="text" id="imgUrl" placeholder="Image Url">
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}