from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):
    def create_user(self, id, pw, name):
        if not id:
            raise ValueError('must have user id')
        if not pw:
            raise ValueError('must have user password')
        if not name:
            raise ValueError('must have user name')
        user = self.model(
            id = id,
            pw = make_password(pw),
            name = name
        )
        user.save(using=self._db)
        return user
    

class User(models.Model):
    id = models.CharField(primary_key=True, max_length=32)
    pw = models.CharField(max_length=32, blank=True, null=True)
    name = models.CharField(max_length=16, blank=True, null=True)

    objects = UserManager()
    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['id','pw','name']
    
    def __str__(self):
        return self.id