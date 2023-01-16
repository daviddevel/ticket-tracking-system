<template>
  <div>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <b-row>
          <b-col>
            <h6
              class="m-2 float-left font-weight-bold text-primary"
              style="font-size: 30px"
            >
              Ticket List
            </h6>
          </b-col>
          <b-col>
            <b-button
              variant="primary"
              size="m"
              class="float-right"
              @click="clickCreate()"
              v-if="role === 2"
            >
              Create New
            </b-button>
          </b-col>
        </b-row>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <b-table :items="ticketLists" :fields="fields" responsive="sm">
            <template #cell(priority)="row">
              <b-td v-if="row.value === 1">{{ "Feature Request" }}</b-td>
              <b-td v-else-if="row.value === 2">{{ "Bug" }}</b-td>
              <b-td v-else-if="row.type === 3">{{ "Test Case" }}</b-td>
              <b-td v-else-if="row.type === 4">{{ "Hot Fix" }}</b-td>
              <b-td v-else>{{ null }}</b-td>
            </template>
            <template #cell(type)="row">
              <b-td v-if="row.value === 1">{{ "High" }}</b-td>
              <b-td v-else-if="row.value === 2">{{ "Medium" }}</b-td>
              <b-td v-else-if="row.value === 3">{{ "Low" }}</b-td>
              <b-td v-else>{{ null }}</b-td>
            </template>
            <template #cell(resolved)="row">
              <b-td v-if="row.value === 0">{{ "Open" }}</b-td>
              <b-td v-else>{{ "Closed" }}</b-td>
            </template>

            <template #cell(action)="row">
              <b-td>
                <a
                  v-b-modal.modal-1
                  class="btn btn-success btn-circle"
                  @click="clickEdit(row.item)"
                >
                  <i class="fas fa-edit"></i>
                </a>
                <a
                  v-b-modal.modal-2
                  class="btn btn-danger btn-circle"
                  @click="clickDelete(row.item)"
                  v-if="role === 2"
                >
                  <i class="fas fa-trash"></i>
                </a>
              </b-td>
            </template>
          </b-table>
        </div>
      </div>
    </div>
    <b-container>
      <b-modal ref="edit-modal" id="modal-1" title="Ticket">
        <b-form-group
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
        >
        <template v-slot:label>
            Summary <span class="text-danger">*</span>
        </template>
          <b-form-input
            id="summary"
            name="fieldName"
            v-model="$v.ticket.summary.$model"
            placeholder="Summary here..."
            rows="3"
            max-rows="6"
            :disabled="role === 2 ? false : true"
            :state="validateState('summary')"
          ></b-form-input>
          <b-form-invalid-feedback
              id="summary"
            >Sumary is required.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="Type:"
          label-for="nested-street"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-select
            v-model="ticket.type"
            :options="typeOptions"
            :disabled="role === 2 ? false : true"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label="Priority:"
          label-for="nested-street"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-select
            v-model="ticket.priority"
            :options="priorityOptions"
            :disabled="role === 2 ? false : true"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label="Description:"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
        >
        <template v-slot:label>
          Description <span class="text-danger">*</span>
        </template>
          <b-form-textarea
            id="textarea"
            v-model="$v.ticket.desc.$model"
            placeholder="Description here..."
            rows="3"
            max-rows="6"
            :disabled="role === 2 ? false : true"
            :state="validateState('desc')"
          ></b-form-textarea>
          <b-form-invalid-feedback
              id="summary"
            >Description is required.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="Resolved:"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
          v-if="role === 3"
        >
          <toggle-button
            v-model="ticket.resolved"
            :value="false"
            color="#3333ff"
            :sync="true"
            :labels="true"
          />
        </b-form-group>
        <template #modal-footer>
          <b-row>
            <b-col>
              <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="clickCancelEdit()"
              >
                Cancel
              </b-button>
            </b-col>

            <b-col v-if="createModal === false">
              <b-button
                variant="success"
                size="sm"
                class="float-right"
                @click="handleEdit()"
              >
                Edit
              </b-button>
            </b-col>
            <b-col v-else>
              <b-button
                variant="success"
                size="sm"
                class="float-right"
                @click="handleCreate()"
              >
                Create
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-modal>
    </b-container>
    <b-container>
      <b-modal ref="edit-modal-2" id="modal-2" title="Delete Ticket">
        <p class="my-4">
          You are about to delete ticket number {{ this.ticketId }}.
        </p>
        <p class="my-4">Are you sure ?</p>
        <template #modal-footer>
          <b-row>
            <b-col>
              <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="cancelDelete()"
              >
                Cancel
              </b-button>
            </b-col>

            <b-col>
              <b-button
                variant="danger"
                size="sm"
                class="float-right"
                @click="handleDelete()"
              >
                Delete
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Tickets",
  mixins: [validationMixin],
  data() {
    return {
      createModal: false,
      ticketLists: null,
      role: this.$store.getters.user.role,
      disabled: true,
      ticketId: null,
      ticket: {
        resolved: false,
        summary: null,
        desc: null,
        type: null,
        priority: null,
      },
      fields: [
        { key: "id", label: "ID" },
        { key: "type", label: "Type" },
        { key: "priority", label: "Priority" },
        { key: "desc", label: "Description" },
        { key: "resolved", label: "Status" },
        { key: "action", label: "Actions" },
      ],
      typeOptions: [
        { value: 1, text: "Feature Request" },
        { value: 2, text: "Bug" },
        { value: 3, text: "Test Case" },
        { value: 4, text: "Hot Fix" },
      ],

      priorityOptions: [
        { value: 1, text: "High" },
        { value: 2, text: "Medium" },
        { value: 3, text: "Low" },
      ],
    };
  },
  validations: {

      ticket: {
        summary: { required },
        desc: { required },
      },

  },
  async created() {
    await this.getList();
  },
  methods: {
    validateState(name) {
      console.log('validateState ', this.$v.ticket[name])
      const { $dirty, $error } = this.$v.ticket[name];
      return $dirty ? !$error : null;
    },
    async getList() {
      let res = await axios.get("tickets");
      this.ticketLists = res.data;
    },
    clickEdit(ticket) {
      this.ticket.resolved = ticket.resolved === 0 ? false : true;
      this.createModal = false;
      this.ticketId = ticket.id;
      this.ticket.type = ticket.type;
      this.ticket.priority = ticket.priority;
      this.ticket.desc = ticket.desc;
      this.ticket.summary = ticket.summary;
    },
    clickCreate() {
      this.$refs["edit-modal"].show();
      this.createModal = true;
      this.ticket.resolved = false;
      this.ticket.type = null;
      this.ticket.priority = null;
      this.ticket.desc = null;
      this.ticket.summary = null;
    },
    clickCancelEdit() {
      this.$refs["edit-modal"].hide();
    },
    cancelDelete() {
      this.$refs["edit-modal-2"].hide();
    },

    async handleCreate() {
      this.$v.ticket.$touch();
      if (this.$v.ticket.$anyError) {
        return;
      }
      let res = await axios.post(`ticket/store`, {
        ticket: this.ticket,
      });
      if ((res.status = 200)) {
        this.createModal = false;
        this.$refs["edit-modal"].hide();
        this.$router.go();
      }
    },

    async handleEdit() {
        this.$v.ticket.$touch();
        if (this.$v.ticket.$anyError) {
          return;
        }
        let res = await axios.put(`ticket/${this.ticketId}`, {
          ticket: this.ticket,
        });
        if ((res.status = 200)) {
          this.$refs["edit-modal"].hide();
          this.$router.go();
        }

    },

    clickDelete(ticket) {
      this.ticketId = ticket.id;
    },
    async handleDelete() {
      let res = await axios.delete(`ticket/${this.ticketId}`, {
        ticket: this.ticket,
      });
      if ((res.status = 200)) {
        this.$refs["edit-modal-2"].hide();
        this.$router.go();
      }
    },
  },
};
</script>
