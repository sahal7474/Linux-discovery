from django.db import models

class Host(models.Model):
    hostname = models.CharField(max_length=255, unique=True)
    ip_address = models.GenericIPAddressField()

    os_name = models.CharField(max_length=100, blank=True, null=True)
    os_version = models.CharField(max_length=100, blank=True, null=True)
    cpu_model = models.CharField(max_length=255, blank=True, null=True)
    memory_total = models.CharField(max_length=100, blank=True, null=True)

    last_scanned = models.DateTimeField(auto_now=True)
    is_online = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.hostname} ({self.ip_address})"
