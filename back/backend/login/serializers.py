from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            id = validated_data['id'],
            pw = validated_data['pw'],
            name = validated_data['name']
        )
        return user
    
    class Meta:
        model = User
        fields = ("__all__")