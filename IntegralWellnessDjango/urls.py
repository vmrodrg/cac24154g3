"""
URL configuration for IntegralWellnessDjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views as core_view
from nutricion import views as nutricion_view
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', core_view.inicio, name="inicio"),
    path('nutricion/', nutricion_view.nutricion, name="nutricion"),
    path('fisica/', core_view.fisica, name="fisica"),
    path('equilibrio/', core_view.equilibrio, name="equilibrio"),
    path('contacto/', core_view.contacto, name="contacto"),
    path('desayuno/', nutricion_view.desayuno, name="desayuno"),
    path('almuerzo/', nutricion_view.almuerzo, name="almuerzo"),
    path('merienda/', nutricion_view.merienda, name="merienda"),
    path('cena/', nutricion_view.cena, name="cena"),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)