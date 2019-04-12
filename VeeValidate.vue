// VEE VALIDATE WRITE IN HTML
<div class="form-group">
  <label for="">Tên nhân viên</label>
  <input type="text"
         v-model="user.ten"
         v-validate="{
            required: true,
            min: 5 ,
            regex: /^[a-zA-Z0-9\.\@\_]*$/
         }"
         name="ten"
         class="form-control"
         :class="{ 'is-invalid': submitted && errors.has('ten') }">
  <p v-for="error in errors.items" v-bind:key="`${error.field} - ${error.rule}`">
    <span v-if="error.field ==='ten'">
      <template v-if="error.rule === 'required'">Ten 0 duoc de trong</template>
      <template v-if="error.rule === 'min'">Ban phai nhap tren 5 ki tu</template>
      <template v-if="error.rule === 'regex'">Khong duoc co khoang trang</template>
    </span>
  </p>
</div>
