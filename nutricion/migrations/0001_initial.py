# Generated by Django 5.0.6 on 2024-07-04 23:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Receta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('horario', models.CharField(max_length=50)),
                ('dia', models.CharField(max_length=50)),
                ('imagen', models.ImageField(upload_to='')),
                ('detalle', models.TextField()),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]