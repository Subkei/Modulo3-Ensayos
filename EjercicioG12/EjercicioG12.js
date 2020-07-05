$("#commentForm").validate({
  rules: {
      name: {
          required: true,
          minlength: 5,
          maxlength: 25,
          email: true
      },
      marca: {
          required: true,
          minlength: 5,
          maxlength: 30
      },
      stock: {
          required: true,
          number: true,
          min: 0,
          max: 1000
      }
  },
  messages: {
      name: {
          required: "Debe ingresar un nombre del articulo",
          minlength: "Mínimo 5",
          maxlength: "Máximo 25"
      },
      marca: {
        required: "Debe ingresar una marca",
        minlength: "Debe tener mínimo 5 caracteres",
        maxlength: "Puede tener hasta un máximo de 30 caracteres"
      },
      stock: {
        required: "Ingrese un valor de stock",
        number: "Debe ser un numero",
        min: "Debe ser un numero mayor o igual a cero",
        max: "Debe ser un numero menor o igual a 1000"
      }
  }
})