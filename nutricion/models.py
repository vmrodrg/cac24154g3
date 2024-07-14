from django.db import models
from ckeditor.fields  import RichTextField


# Create your models here.

class Receta(models.Model):
    titulo = models.CharField(max_length=200)
    horario = models.CharField(max_length=50)
    dia = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to="recertas")
    detalle = RichTextField(blank=True, null=True)
    # detalle = models.TextField()
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.titulo