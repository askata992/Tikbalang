import * as data from 'data';
import { load as loadTemplate } from 'templates';

/*
import homeTemplate from 'homeTemplate!text';
const template = Handlebars.compile(homeTemplate);
*/

const $appContainer = $('#app-container');

export function get(params) {
    const { category } = params;

    Promise.all([
            loadTemplate('clients'),
            data.getClients()
        ])
        .then(([template, clients]) => {
            $appContainer.html(template(clients));
        })
        .then(() => {
            $('#dataTable').DataTable();

            $("#dataTable_filter label").addClass("col-sm-8 col-md-8");
            $("#dataTable_filter").append('<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Add Client</button>');

            $('.add-client').on('click', function() {

                $('#add-client-wrapper').removeClass('hidden');
                $('.card').addClass('blur');
                $('#mainNav').addClass('blur');
            });
            $('#add-client-wrapper').on('click', function(el) {

                if ($(el.target)[0].id == 'add-client-wrapper') {

                    $('#add-client-wrapper').addClass('hidden');
                    $('.card').removeClass('blur');
                    $('#mainNav').removeClass('blur');
                }

            });
        });
}

export function addClient() {
    const name = 5;
    const profession = 5;
    const age = 5;
    const trainings = 5;
    const endDate = 5;
    const price = 5;

    data.addClient(name, profession, age, trainings, endDate, price)
        .then(
            result => {
                toastr.success(`Client ${name} has been added successfully`);

            },
            errorMsg => toastr.error(errorMsg));
}