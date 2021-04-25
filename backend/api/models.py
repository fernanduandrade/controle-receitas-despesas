from django.db import models

# Create your models here.


class Budget(models.Model):
    id = models.AutoField(primary_key=True)
    expense = models.IntegerField()
    register_type = models.CharField(max_length=10)
    category = models.CharField(max_length=25)
    description = models.CharField(max_length=60)
    expense_type = models.CharField(max_length=20)
    date = models.DateField()
